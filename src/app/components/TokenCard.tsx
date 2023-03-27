"use client";

import { TokenMarketData } from "@/types";
// import { BuyModal } from "@reservoir0x/reservoir-kit-ui";
import { formatEther } from "ethers/lib/utils.js";
import Link from "next/link";
import { BuyButton } from "./BuyModal";
import Image from "next/image";
import { Button } from "./ui/button";

interface TokenCardProps {
  token: TokenMarketData;
  layout?: "grid" | "list";
}

export const TokenCard = (props: TokenCardProps) => {
  const { token, layout } = props;

  const isGrid = layout == "grid";

  const grid =
    "duration-300 transform border-2 rounded-xl border-white/10 hover:-translate-y-1";

  const list =
    "duration-300 transform border-2 rounded-xl border-white/10 hover:-translate-y-1 flex w-full";

  const imageSize = isGrid ? 800 : 60;

  return (
    <div className={layout === "grid" ? grid : list}>
      <Image
        src={token.token.image || ""} // Use the path to your image
        alt="An example image" // Provide a descriptive alt text
        className={`${isGrid ? "mx-auto rounded-t-xl" : "rounded-xl"}`}
        width={imageSize} // Set the original width of the image
        height={imageSize} // Set the original height of the image'fill')
      />
      {isGrid ? (
        <div className={`w-full px-3 pt-4 pb-2`}>
          <div className="flex justify-between w-full text-sm">
            <span className="font-semibold">#{token.token.tokenId} </span>
            {token.market.floorAsk.source.icon && (
              <Image
                src={token.market.floorAsk.source.icon} // Use the path to your image
                alt="An example image" // Provide a descriptive alt text
                width={20} // Set the original width of the image
                height={20} // Set the original height of the image'fill')
                className=""
              />
            )}
          </div>
          <h5>{token.token.name}</h5>

          <h6 className="font-semibold">
            {token.market.floorAsk.price
              ? formatEther(token.market.floorAsk.price.amount.raw)
              : ""}{" "}
            ETH
          </h6>

          <div className="flex justify-between space-x-2">
            <Button
              href={`/collection/${token.token.contract}/${token.token.tokenId}`}
              variant={"outline"}
              className="w-full"
            >
              view
            </Button>
            <BuyButton
              address={token.token.contract}
              id={token.token.tokenId}
            />
          </div>
        </div>
      ) : (
        <div className={`w-full px-3 flex justify-between`}>
          <div className="flex w-full">
            <div className="self-center">
              <div className="text-sm">#{token.token.tokenId} </div>
              <div className="self-center">{token.token.name}</div>
            </div>

            <h6 className="self-center ml-auto">
              {token.market.floorAsk.price
                ? formatEther(token.market.floorAsk.price.amount.raw)
                : ""}{" "}
              ETH
            </h6>
            <div className="self-center justify-between px-3 text-sm">
              {token.market.floorAsk.source.icon && (
                <Image
                  src={token.market.floorAsk.source.icon} // Use the path to your image
                  alt="An example image" // Provide a descriptive alt text
                  width={20} // Set the original width of the image
                  height={20} // Set the original height of the image'fill')
                  className=""
                />
              )}
            </div>
          </div>

          <div className="flex self-center justify-between space-x-2">
            <Button
              href={`/collection/${token.token.contract}/${token.token.tokenId}`}
              variant={"outline"}
              className="w-full"
            >
              view
            </Button>
            <BuyButton
              address={token.token.contract}
              id={token.token.tokenId}
            />
          </div>
        </div>
      )}
    </div>
  );
};

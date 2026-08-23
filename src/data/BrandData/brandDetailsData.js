import rawLogo from "../../assets/img/brands/BrandRaw.png";
import smackdownLogo from "../../assets/img/brands/BrandSM.png";
import nxtLogo from "../../assets/img/brands/BrandNXT.png";
import { rosterTabs } from "../RosterData/rosterData";

const champions = rosterTabs.find((tab) => tab.id === "first").items;

const buildBrandDetail = (id, title, logo) => ({
  id,
  title,
  subtitle: "Explore the current champions and the brand logo.",
  tabs: [
    {
      id: "champions",
      label: "Champions",
      variant: "champions",
      items: champions,
    },
    {
      id: "logo",
      label: "Logo",
      variant: id,
      items: [
        { id: `${id}-logo`, title, description: "Brand Logo", imgUrl: logo },
      ],
    },
  ],
});

export const brandDetails = {
  raw: buildBrandDetail("raw", "RAW", rawLogo),
  smackdown: buildBrandDetail("smackdown", "SmackDown", smackdownLogo),
  nxt: buildBrandDetail("nxt", "NXT", nxtLogo),
};

export const getBrandDetailById = (brandId) => brandDetails[brandId] || null;

export const hasBrandDetail = (brandId) => Boolean(brandDetails[brandId]);

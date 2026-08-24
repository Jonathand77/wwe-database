import { rawDetail } from "./rawData";
import { smackdownDetail } from "./smackdownData";
import { nxtDetail } from "./nxtData";

export const brandDetails = {
  raw: rawDetail,
  smackdown: smackdownDetail,
  nxt: nxtDetail,
};

export const getBrandDetailById = (brandId) => brandDetails[brandId] || null;

export const hasBrandDetail = (brandId) => Boolean(brandDetails[brandId]);

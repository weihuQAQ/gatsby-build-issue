import { PageProps, GetServerData } from "gatsby";
import React, { FC } from "react";

export const ProductDetail1: FC<PageProps> = (props) => {
  console.log(props);

  return <div>ProductDetail 1</div>;
};

export default ProductDetail1;

/** Vendor **/
import { Button } from "@contra-ui/core";
import { Stack, Table, TableProps, Tbody, Td, Tr } from "@chakra-ui/react";

/** Data **/
import { Product } from "./pricingData";

interface ProductCallToActionTableProps extends TableProps {
  beta?: boolean;
  products: Product[];
  isMobile?: boolean;
}

function ProductCallToActionTable(props: ProductCallToActionTableProps) {
  const { beta, products, isMobile, ...tableProps } = props;

  function ButtonSelector({ id }: { id: number }): JSX.Element {
    let element: JSX.Element = <></>;

    if (isMobile && beta) {
      element = (
        <Button className="primary-btn" appearance="primary" width="full">
          Join Now
        </Button>
      );
    } else if (isMobile) {
      element = (
        <Button
          disabled
          appearance="primary"
          width="full"
          style={{ cursor: "not-allowed" }}
        >
          Coming Soon
        </Button>
      );
    } else {
      if (id > 0) {
        element = (
          <Button
            disabled
            appearance="primary"
            width="full"
            style={{ cursor: "not-allowed" }}
          >
            Coming Soon
          </Button>
        );
      } else {
        element = (
          <Button className="primary-btn" appearance="primary" width="full">
            Join Now
          </Button>
        );
      }
    }
    return element;
  }

  return (
    <Table sx={{ tableLayout: "fixed" }} {...tableProps}>
      <Tbody>
        <Tr>
          {products.length > 1 && <Td borderBottomWidth="0px" />}
          {products.map((_, id) => (
            <Td key={"product-buy-button-" + id} borderBottomWidth="0px">
              <Stack spacing="3">
                <ButtonSelector id={id} />
              </Stack>
            </Td>
          ))}
        </Tr>
      </Tbody>
    </Table>
  );
}
export default ProductCallToActionTable;

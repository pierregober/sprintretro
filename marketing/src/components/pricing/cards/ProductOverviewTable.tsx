/** Vendor **/
import { Button } from "@contra-ui/core";
import {
  Heading,
  HStack,
  Stack,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";

/** Data **/
import { Product } from "./pricingData";

interface ProductOverviewTableProps extends TableProps {
  beta?: boolean;
  products: Product[];
  isMobile?: boolean;
}

function ProductOverviewTable(props: ProductOverviewTableProps) {
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
      <Thead>
        <Tr>
          {products.length > 1 && <Td />}
          {products.map((product, id) => (
            <Td key={id} fontSize="xl" fontWeight="semibold">
              <HStack>
                <Text>{product.name}</Text>
                {/* {product.isPopular && <Badge colorScheme="blue">Popular</Badge>} */}
              </HStack>
            </Td>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          {products.length > 1 && <Td borderBottomWidth="0px" />}
          {products.map((product, id) => (
            <Td key={id} whiteSpace="normal" borderBottomWidth="0px">
              <Stack spacing="6">
                <Stack spacing="4">
                  <Stack direction="row" align="baseline" spacing="1">
                    <Heading size="lg" color="default">
                      {product.price}
                    </Heading>
                    <Text fontWeight="medium" fontSize="medium" color="muted">
                      /mo
                    </Text>
                  </Stack>
                  <Text color="muted" fontSize="sm" whiteSpace="normal">
                    {product.description}
                  </Text>
                </Stack>
                <ButtonSelector id={id} />
              </Stack>
            </Td>
          ))}
        </Tr>
      </Tbody>
    </Table>
  );
}
export default ProductOverviewTable;

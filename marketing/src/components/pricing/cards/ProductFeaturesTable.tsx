import {
  Flex,
  HStack,
  Icon,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { features, Product } from "./pricingData";
import { Feature } from "./Feature";

interface ProductFeaturesTableProps extends TableProps {
  products: Product[];
}

function ProductFeaturesTable(props: ProductFeaturesTableProps) {
  const { products, ...tableProps } = props;

  return (
    <>
      {features.map((feature, featureId) => (
        <Table
          key={featureId}
          sx={{ tableLayout: "fixed" }}
          variant="striped"
          {...tableProps}
        >
          <Thead>
            <Tr>
              <Th colSpan={products.length + 1} color="accent" fontSize="sm">
                {feature.category}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {feature.items.map((item, id) => (
              <Tr key={id}>
                <Td fontWeight="semibold">
                  <HStack spacing="1">
                    <Text fontWeight="semibold">{item.name}</Text>
                    {item.tooltip && (
                      <Tooltip label={item.tooltip} placement="bottom-start">
                        <Flex justify="center">
                          <Icon
                            as={FiInfo}
                            boxSize="4"
                            color="muted"
                            alignSelf="bottom"
                          />
                        </Flex>
                      </Tooltip>
                    )}
                  </HStack>
                </Td>
                {products.map((product, id) => (
                  <Td
                    key={id}
                    textAlign={products.length > 1 ? "center" : "right"}
                    height="16"
                    color="muted"
                  >
                    <Feature value={product.features[item.name]} />
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      ))}
    </>
  );
}
export default ProductFeaturesTable;

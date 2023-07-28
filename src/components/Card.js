import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={8}>
      <Box bg="white" color="black" borderRadius="md">
        <Image borderRadius="md" src={imageSrc} />
        <div style={{ padding: 25 }}>
          <Heading fontSize="xl">{title}</Heading>
          <Text
            py="2"
            style={{ color: "rgba(0, 0, 0, 0.48)", fontWeight: 500 }}
          >
            {description}
          </Text>
          <Text fontSize="sm" style={{ fontWeight: 500, cursor: "pointer" }}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </div>
      </Box>
    </HStack>
  );
};

export default Card;

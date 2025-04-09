"use client";

import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  Spinner,
  createListCollection,
  Portal,
  Select,
} from "@chakra-ui/react";

export default function YouTubeConverter() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const handleConvert = () => {
    if (!url) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setDownloadReady(true);
    }, 3000); // Simula o processo
  };

  return (
    <Box p={5} maxW="500px" mx="auto" textAlign="center">
      <VStack spaceY={4}>
        <Text fontSize="xl" fontWeight="bold">
          YouTube para MP3
        </Text>
        <Input
          placeholder="Insira o link do vídeo ou playlist"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Select.Root collection={qualities}>
          <Select.HiddenSelect />
          <Select.Label>Selecione qualidade</Select.Label>

          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Selecione qualidade" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>

          <Portal>
            <Select.Positioner>
              <Select.Content>
                {qualities.items.map((quality) => (
                  <Select.Item key={quality.value} item={quality}>
                    {quality.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>

        <Button colorScheme="blue" onClick={handleConvert} disabled={loading}>
          {loading ? <Spinner size="sm" /> : "Converter"}
        </Button>
        {downloadReady && <Text color="green.500">Download pronto!</Text>}
      </VStack>
    </Box>
  );
}

const qualities = createListCollection({
  items: [
    { value: "high", label: "Alta Qualidade" },
    { value: "balanced", label: "Equilibrado" },
    { value: "low", label: "Menor Tamanho" },
  ],
});

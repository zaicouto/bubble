"use client";

import { useState } from "react";
import { Box, Input, Button, Text, VStack, Spinner } from "@chakra-ui/react";
import SelectQuality from "./select-quality";

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
        <SelectQuality />
        <Button colorScheme="blue" onClick={handleConvert} disabled={loading}>
          {loading ? <Spinner size="sm" /> : "Converter"}
        </Button>
        {downloadReady && <Text color="green.500">Download pronto!</Text>}
      </VStack>
    </Box>
  );
}

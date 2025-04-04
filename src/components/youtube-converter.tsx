import { useState } from "react";
import {
  Box,
  Input,
  Button,
  Select,
  Text,
  VStack,
  Spinner,
} from "@chakra-ui/react";

export default function YouTubeConverter() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("balanced");
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
      <VStack spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          YouTube para MP3
        </Text>
        <Input
          placeholder="Insira o link do vídeo ou playlist"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Select value={quality} onChange={(e) => setQuality(e.target.value)}>
          <option value="high">Alta Qualidade</option>
          <option value="balanced">Equilibrado</option>
          <option value="low">Menor Tamanho</option>
        </Select>
        <Button colorScheme="blue" onClick={handleConvert} isDisabled={loading}>
          {loading ? <Spinner size="sm" /> : "Converter"}
        </Button>
        {downloadReady && <Text color="green.500">Download pronto!</Text>}
      </VStack>
    </Box>
  );
}

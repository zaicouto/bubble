"use client";

import { createListCollection, Portal, Select } from "@chakra-ui/react";

export default function SelectQuality() {
  return (
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
  );
}

const qualities = createListCollection({
  items: [
    { value: "high", label: "Alta Qualidade" },
    { value: "balanced", label: "Equilibrado" },
    { value: "low", label: "Menor Tamanho" },
  ],
});

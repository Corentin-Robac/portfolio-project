// AutoEvaluation.

import React from "react";
import { Radar } from "./Radar";
import { Flex, Text, Heading, Box, Tabs } from "@radix-ui/themes";
import { SunburstChart } from "./SunburstChart.tsx";
import { useStore } from "@nanostores/react";
import { $saeData } from "@/store/Store.js";

const test1 = [
  {
    name: "test1",
    label11: 0.22,
    label12: 0.28,
    label13: 0.29,
    label14: 0.17,
    label15: 0.22,
    label16: 0.02,
  },
];

const test2 = [
  {
    name: "test2",
    label21: 0.29,
    label22: 0.21,
    label23: 0.39,
    label24: 0.27,
    label25: 0.12,
    label26: 0.32,
  },
];

const test3 = [
  {
    name: "test3",
    label31: 0.02,
    label32: 0.18,
    label33: 0.39,
    label34: 0.27,
    label35: 0.17,
    label36: 0.12,
  },
];

export function HardskillsRadar() {
  const hardskills = useStore($saeData).hardskills;
  return (
    <Flex justify="center">
      <Tabs.Root defaultValue={hardskills?.[0].name}>
        <Tabs.List justify="start">
          {hardskills.map((skillData) => (
            <Tabs.Trigger value={skillData.name}>{skillData.name}</Tabs.Trigger>
          ))}
        </Tabs.List>

        <Box pt="3">
          {hardskills.map((skillData) => (
            <Tabs.Content value={skillData.name}>
              <Radar datas={[skillData]} />
            </Tabs.Content>
          ))}
        </Box>
      </Tabs.Root>
    </Flex>
  );
}

export function SoftskillsSunburst() {
  return (
    <Flex justify="center">
      <SunburstChart />
    </Flex>
  );
}

export function ToolsRadar() {
  return (
    <Flex justify="center">
      <Radar datas={test2} />
    </Flex>
  );
}

// export default function AutoEvaluation() {
//   return (
//     <Flex gap="4" direction="column">
//       <Flex gap="1" direction="column">
//         <Heading as="h3" size="3">
//           Hardskills :
//         </Heading>
//         <Text>
//           Estimez votre niveau de maitrise pour chaque sous compétence sur une
//           échelle de 1 à 5 (1 = Pas du tout maitrisé ; 5 = Tout à fait maitrisé)
//         </Text>

//         <Radar datas={test1} />
//       </Flex>

//       <Flex gap="1" direction="column">
//         <Heading as="h3" size="3">
//           Softskills :
//         </Heading>
//         <Text>
//           Identifiez le ou les softskills que vous avez utilisé lors de votre
//           SAE ou de votre projet en ressource
//         </Text>

//         <SunburstChart />
//       </Flex>

//       <Flex gap="1" direction="column">
//         <Heading as="h3" size="3">
//           Outils et méthodes :
//         </Heading>
//         <Text>
//           Estimer votre niveau de maitrise pour chaque outil et méthode sur une
//           échelle de 1 à 5 (1 = Pas du tout maitrisé ; 5 = Tout à fait maitrisé)
//         </Text>

//         <Radar datas={test3} />
//       </Flex>
//     </Flex>
//   );
// }

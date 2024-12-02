import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Group,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";


export default function Home() {
  return (
    <AppShell header={{ height: 100 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Image
            className="dark:invert"
            src="logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <Title>Your Safe Mind</Title>
        </Group>
      </AppShellHeader>
      <AppShellMain>


      </AppShellMain>
    </AppShell>
  );
}

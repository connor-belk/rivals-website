import Link from "next/link";

export default function NavButtonHome({ navigation }: { navigation: any }) {
  const linkTitle = navigation.charAt(0).toUpperCase() + navigation.slice(1);

  return <Link href={`/${navigation}`}>{linkTitle}</Link>;
}

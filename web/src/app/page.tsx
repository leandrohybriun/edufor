import { Emphasis } from "@/components/typography/emphasis";
import { Heading } from "@/components/typography/heading";
import { Label } from "@/components/typography/label";
import { LabelDetail } from "@/components/typography/label-detail";
import { Paragraph } from "@/components/typography/paragraph";
import { Subtitle } from "@/components/typography/subtitle";
import { Title } from "@/components/typography/title";

export default function HomePage() {
  return (
    <div>
      <Emphasis>Destaque</Emphasis>
      <Heading>Heading</Heading>
      <Title>Title</Title>
      <Subtitle>Subtitle</Subtitle>
      <Paragraph>Text</Paragraph>
      <Label>Label</Label>
      <LabelDetail>Label Detail</LabelDetail>
    </div>
  );
}

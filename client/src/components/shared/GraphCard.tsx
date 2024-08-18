import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface props {
    cardHeading: string,
    cardDescription: string,
    cardContent: React.ReactElement
}

const GraphCard: React.FC <props> = ({cardHeading, cardDescription, cardContent}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardHeading}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        {cardContent}
      </CardContent>
    </Card>
  );
};



export default GraphCard;

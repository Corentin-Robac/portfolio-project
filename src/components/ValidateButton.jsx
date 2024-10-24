import { CheckIcon } from "@radix-ui/react-icons";
import { Link, Button } from "@radix-ui/themes";
import updateTextareaTreemap from "@/../actions/updateTextareaTreemap";

export default function ValidateButton({ href }) {

  return (
    // <Link href={href}>
        <Button onClick={updateTextareaTreemap} color="indigo" size="4" variant="surface">
            <CheckIcon />
            Valider
        </Button>
    // </Link>
  );
}

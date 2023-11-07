import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

/**
 * Renders a demo of a radio group.
 *
 * @return {JSX.Element} The rendered radio group demo.
 */

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label className="text-muted" htmlFor="r1">
          Default
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label className="text-muted" htmlFor="r2">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label className="text-muted" htmlFor="r3">
          Compact
        </Label>
      </div>
    </RadioGroup>
  );
}

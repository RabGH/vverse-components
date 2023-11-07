import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

/**
 * Renders a SwitchDemo component.
 *
 * @return {JSX.Element} The rendered SwitchDemo component.
 */

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label className="text-muted" htmlFor="airplane-mode">
        Airplane Mode
      </Label>
    </div>
  );
}

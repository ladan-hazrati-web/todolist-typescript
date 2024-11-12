type HintBoxProps = {
  mode: "hint";
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
};

export default function InfoBox(props: HintBoxProps | WarningBoxProps) {
  if (props.mode === "hint") {
    return (
      <div className="infobox infobox-hint">
        <p>You have no course goals yet , start adding some</p>
      </div>
    );
  }
  return (
    <div className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>You`re collecting a lot of goals , don`t put too much on your plate</p>
    </div>
  );
}

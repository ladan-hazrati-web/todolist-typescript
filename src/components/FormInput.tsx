import { FormEvent, useRef } from "react";

type FormInputProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};

export default function FormInput({ handleAddGoal }: FormInputProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const eneteredSummary = summary.current!.value;
    handleAddGoal(enteredGoal, eneteredSummary);
    event.currentTarget.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goals:</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Your summary:</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <button>Add Goal</button>
    </form>
  );
}

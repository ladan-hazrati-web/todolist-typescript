import Header from "./components/Header";
import imgGolas from "./assets/goals.jpg";
import FormInput from "./components/FormInput";
import { ReactNode, useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import InfoBox from "./components/InfoBox";
export type CourseGoalProps = {
  id: number;
  goal: string;
  summary: string;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);
  console.log(goals);
  function handleAddGoal(goal: string, summary: string) {
    if (goal && summary) {
      setGoals((prevGoals) => {
        const newGoal: CourseGoalProps = {
          id: Math.random(),
          goal,
          summary,
        };
        return [...prevGoals, newGoal];
      });
    }
  }
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((item) => item.id !== id));
  }
  let infoBox: ReactNode;

  if (goals.length >= 4) {
    infoBox = <InfoBox mode="warning" severity="medium" />;
  }
  return (
    <main>
      <Header image={{ src: imgGolas, alt: "golas" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <FormInput handleAddGoal={handleAddGoal} />
      {goals.length === 0 && <InfoBox mode="hint" />}
      {infoBox}
      <ul>
        {goals.map((goal) => (
          <CourseGoalList
            key={goal.id}
            goal={goal}
            handleDeleteGoal={handleDeleteGoal}
            goals={goals}
          />
        ))}
      </ul>
    </main>
  );
}

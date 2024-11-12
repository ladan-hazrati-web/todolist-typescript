import { CourseGoalProps } from "../App";

type CourseGoalListProps = {
  goal: {
    id: number;
    goal: string;
    summary: string;
  };
  goals: CourseGoalProps[];
  handleDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goal,
  handleDeleteGoal,
}: CourseGoalListProps) {
  return (
    <li>
      <article>
        <h2>{goal.goal}</h2>
        <button onClick={() => handleDeleteGoal(goal.id)}>delete</button>
      </article>
      <p>{goal.summary}</p>
    </li>
  );
}

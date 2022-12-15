import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { FaRegWindowClose } from "react-icons/fa";

function GoalItem({ goal }) {
 const dispatch = useDispatch();
 const onDelete = () => {
  dispatch(deleteGoal(goal._id));
 };

 return (
  <div className="goal">
   <div>{new Date(goal.createdAt).toLocaleString()}</div>
   <h2>{goal.text}</h2>

   <button onClick={onDelete} className="close">
    <FaRegWindowClose />
   </button>
  </div>
 );
}

export default GoalItem;

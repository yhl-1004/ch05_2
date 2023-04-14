import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "../components";
import type { AppState } from "../store";
import * as C from "../store/counter";

export default function CounterTest() {
  const dispatch = useDispatch();

  const counter = useSelector<AppState, C.State>(({ counter }) => counter);
  const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch]);
  const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch]);

  return (
    <section className="mt-4">
      <div>CounterTest</div>
      <div className="flex justify-around w-1/3 text-blue-500 item-center text-bold">
        <Icon name="add_circle" onClick={increase} />
        <div>{counter}</div>
        <Icon name="remove-circle" onClick={decrease} />
      </div>
    </section>
  );
}

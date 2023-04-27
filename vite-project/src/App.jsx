import { useState } from "react";
import "./App.css";
import { Card } from "./Card";
import { Reorder } from "framer-motion";
import { Submit } from "./Submit";
import Swal from "sweetalert2";

const initialItems = [
  { id: 1, name: "Not Mankouchi", desc: "A mind blowing website to vote !" },
  {
    id: 2,
    name: "The Real Mankouchi",
    desc: "A mind blowing website to vote !",
  },
  { id: 3, name: "Not Mohamed", desc: "A mind blowing website to vote !" },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleSubmit = (data) => {
    console.log(data);
    console.log(items);
    let user = {
      email: data,
      voting: items,
    };
    if (!localStorage.getItem("votes")) {
      localStorage.setItem("votes", JSON.stringify([]));
    }

    let votes = JSON.parse(localStorage.getItem("votes"));

    let check = votes.find((el) => el.email == data);

    if (check) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "Cant vote with same email !",
      });
      return;
    }

    votes.push(user);
    localStorage.setItem("votes", JSON.stringify(votes));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "You have successfully voted ! Thank you",
    });
  };
  return (
    <div className="wrapper">
      <div style={{ textAlign: "center" }} className="header">
        <h1>Voting System</h1>
      </div>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Reorder.Group>
      <Submit submit={handleSubmit} />
    </div>
  );
}

export default App;

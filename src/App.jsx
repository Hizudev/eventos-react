import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import InfoBox from "./components/InfoBox";
import CollapseInfo from "./components/CollapseInfo";
import swal from "sweetalert";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    swal(
      `Buen Trabajo ${name}!`,
      "¡Lograste desbloquear al Ditto bailarín!",
      "/src/assets/gif/party-dancing.gif"
    );
  };

  const renderInfo = () => {
    let info = [];
    if (name === "") {
      info.push("Ingresa un nombre");
    }
    if (password === "") {
      info.push("ingresa una password");
    }
    if (password !== "" && password !== "252525") {
      info.push("Password Incorrecta");
    }
    return info;
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const infoArray = renderInfo();

  return (
    <section className="vh-100 d-flex flex-column justify-content-evenly align-items-center">
      <h1 className="text-center">
        Descubre el código y desbloquea su secreto
      </h1>
      <form className="d-flex gap-2">
        <Input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {password === "252525" && name !== "" ? (
          <Button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Desbloquear!
          </Button>
        ) : (
          <Button type="submit" className="btn btn-danger" disabled>
            Bloqueado
          </Button>
        )}
      </form>
      {infoArray.length !== 0 ? (
        <InfoBox info={infoArray} className="alert alert-danger" role="alert" />
      ) : (
        <InfoBox info={infoArray} />
      )}
      <div>
        <CollapseInfo className="btn btn-warning" />
      </div>
    </section>
  );
};

export default App;

import { render, screen, fireEvent } from "@testing-library/react";
import PostComments from "./index";

describe("PostComments", () => {
  test("deve inserir dois comentários na lista", () => {
    render(<PostComments />);

    const input = screen.getByTestId("input-comentario");
    const botao = screen.getByTestId("btn-enviar");

    // Primeiro comentário

    fireEvent.change(input, { target: { value: "Primeiro comentário" } });
    fireEvent.click(botao);

    // Segundo comentário

    fireEvent.change(input, { target: { value: "Segundo comentário" } });
    fireEvent.click(botao);

    const lista = screen.getByTestId("lista-comentarios");

    expect(lista).toHaveTextContent("Primeiro comentário");
    expect(lista).toHaveTextContent("Segundo comentário");
  });
});

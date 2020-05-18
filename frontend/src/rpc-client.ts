/* eslint-disable @typescript-eslint/no-unused-vars */

function call(method: any) {
  return fetch("/rpc", {
    method: "POST",
    body: JSON.stringify({ ...method, jsonrpc: "2.0", id: 0 }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) =>
      json.error == null ? json.result : Promise.reject(json.error)
    );
}

export function add(params: { x: number; y: number }): Promise<number> {
  return call({
    method: "add",
    params: params,
  }) as Promise<number>;
}

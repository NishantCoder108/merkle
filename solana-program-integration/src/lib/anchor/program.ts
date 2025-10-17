import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { StakingProgram } from "./staking_program_types";
import { Connection } from "@solana/web3.js";
import { idl } from "./staking_program_idl";

export function getProgram(
  connection: Connection,
  wallet: any
): Program<StakingProgram> {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
  return new Program(idl as StakingProgram, provider);
}

export const idl = {
  address: "Hv6Q2KdFtbdobWYEeMWJ2yPfmg6efMZPd3A6mfKN3L7W",
  metadata: {
    name: "staking_program",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "claim_token",
      discriminator: [116, 206, 27, 191, 166, 19, 0, 73],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "stake",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [115, 116, 97, 107, 101],
              },
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "arg",
                path: "stake_id",
              },
            ],
          },
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
        {
          name: "token_mint",
          writable: true,
          address: "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9",
        },
        {
          name: "associated_global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "global",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_user",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "stake_id",
          type: "i64",
        },
      ],
    },
    {
      name: "deposit_token",
      discriminator: [11, 156, 96, 218, 39, 163, 180, 19],
      accounts: [
        {
          name: "admin",
          writable: true,
          signer: true,
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
        {
          name: "token_mint",
          address: "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9",
        },
        {
          name: "associated_global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "global",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_admin",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "admin",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initialize",
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      accounts: [
        {
          name: "admin",
          writable: true,
          signer: true,
          address: "BjjFpCbTrFVn3ZgcdCv4jTLAzbbDCMV1Vo115XJSJ7XG",
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
        {
          name: "token_mint",
          address: "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9",
        },
        {
          name: "associated_global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "global",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_token_program",
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [],
    },
    {
      name: "pause",
      discriminator: [211, 22, 221, 251, 74, 121, 193, 47],
      accounts: [
        {
          name: "admin",
          writable: true,
          signer: true,
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "paused",
          type: "bool",
        },
      ],
    },
    {
      name: "stake_token",
      discriminator: [191, 127, 193, 101, 37, 96, 87, 211],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "stake",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [115, 116, 97, 107, 101],
              },
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "arg",
                path: "stake_id",
              },
            ],
          },
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
        {
          name: "token_mint",
          address: "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9",
        },
        {
          name: "associated_stake",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "stake",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_user",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_token_program",
          address: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "stake_id",
          type: "i64",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "lock_duration",
          type: {
            defined: {
              name: "DurationType",
            },
          },
        },
      ],
    },
    {
      name: "unstake_token",
      discriminator: [165, 130, 39, 20, 80, 43, 116, 186],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "stake",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [115, 116, 97, 107, 101],
              },
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "arg",
                path: "stake_id",
              },
            ],
          },
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
        {
          name: "token_mint",
          writable: true,
          address: "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9",
        },
        {
          name: "associated_global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "global",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_stake",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "stake",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "associated_user",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "const",
                value: [
                  6, 221, 246, 225, 215, 101, 161, 147, 217, 203, 225, 70, 206,
                  235, 121, 172, 28, 180, 133, 237, 95, 91, 55, 145, 58, 140,
                  245, 133, 126, 255, 0, 169,
                ],
              },
              {
                kind: "account",
                path: "token_mint",
              },
            ],
            program: {
              kind: "const",
              value: [
                140, 151, 37, 143, 78, 36, 137, 241, 187, 61, 16, 41, 20, 142,
                13, 131, 11, 90, 19, 153, 218, 255, 16, 132, 4, 142, 123, 216,
                219, 233, 248, 89,
              ],
            },
          },
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "stake_id",
          type: "i64",
        },
      ],
    },
    {
      name: "update_tier",
      discriminator: [22, 250, 234, 251, 201, 246, 98, 116],
      accounts: [
        {
          name: "admin",
          writable: true,
          signer: true,
        },
        {
          name: "global",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "const",
                value: [103, 108, 111, 98, 97, 108],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "tier",
          type: {
            defined: {
              name: "DurationType",
            },
          },
        },
        {
          name: "new_duration",
          type: "i64",
        },
        {
          name: "new_multiplier",
          type: "f64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Global",
      discriminator: [167, 232, 232, 177, 200, 108, 114, 127],
    },
    {
      name: "Stake",
      discriminator: [150, 197, 176, 29, 55, 132, 112, 149],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "AmountShouldBeGreaterThanZero",
      msg: "Amount Should Be Greater Than Zero",
    },
    {
      code: 6001,
      name: "InvalidMultiplier",
      msg: "The multiplier is invalid",
    },
    {
      code: 6002,
      name: "InvalidDuration",
      msg: "The duration is invalid",
    },
    {
      code: 6003,
      name: "InvalidAmount",
      msg: "The amount provided is invalid",
    },
    {
      code: 6004,
      name: "LockPeriodNotEnded",
      msg: "The lock period has not been ended",
    },
    {
      code: 6005,
      name: "InstructionPaused",
      msg: "The instruction is paused",
    },
  ],
  types: [
    {
      name: "DurationType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "DurationOne",
          },
          {
            name: "DurationTwo",
          },
          {
            name: "DurationThree",
          },
        ],
      },
    },
    {
      name: "Global",
      type: {
        kind: "struct",
        fields: [
          {
            name: "deposited_amount",
            type: "u64",
          },
          {
            name: "staked_amount",
            type: "u64",
          },
          {
            name: "cml_reward_per_token",
            type: "f64",
          },
          {
            name: "burned_amount",
            type: "u64",
          },
          {
            name: "paused",
            type: "bool",
          },
          {
            name: "tier1",
            type: {
              defined: {
                name: "Tier",
              },
            },
          },
          {
            name: "tier2",
            type: {
              defined: {
                name: "Tier",
              },
            },
          },
          {
            name: "tier3",
            type: {
              defined: {
                name: "Tier",
              },
            },
          },
        ],
      },
    },
    {
      name: "Stake",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user",
            type: "pubkey",
          },
          {
            name: "staked_amount",
            type: "u64",
          },
          {
            name: "claimed_amount",
            type: "u64",
          },
          {
            name: "burned_amount",
            type: "u64",
          },
          {
            name: "stake_id",
            type: "i64",
          },
          {
            name: "staked_at",
            type: "i64",
          },
          {
            name: "cml_reward_per_token",
            type: "f64",
          },
          {
            name: "locked_duration",
            type: {
              defined: {
                name: "DurationType",
              },
            },
          },
        ],
      },
    },
    {
      name: "Tier",
      type: {
        kind: "struct",
        fields: [
          {
            name: "duration",
            type: "i64",
          },
          {
            name: "claim_percent",
            type: "f64",
          },
        ],
      },
    },
  ],
  constants: [
    {
      name: "ADMIN_PUBKEY",
      type: "pubkey",
      value: "BjjFpCbTrFVn3ZgcdCv4jTLAzbbDCMV1Vo115XJSJ7XG",
    },
    {
      name: "TOKEN_PUBKEY",
      type: "pubkey",
      value: "Cx97mtHU9hKb3XWeKcDPHgLyEB8vguoNxEsnyGUmm4G9",
    },
  ],
};

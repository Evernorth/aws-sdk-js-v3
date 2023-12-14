// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListGraphsInput, ListGraphsOutput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ListGraphsCommand, se_ListGraphsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGraphsCommand}.
 */
export interface ListGraphsCommandInput extends ListGraphsInput {}
/**
 * @public
 *
 * The output of {@link ListGraphsCommand}.
 */
export interface ListGraphsCommandOutput extends ListGraphsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists available Neptune Analytics graphs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListGraphsCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListGraphsCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListGraphsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListGraphsCommand(input);
 * const response = await client.send(command);
 * // { // ListGraphsOutput
 * //   graphs: [ // GraphSummaryList // required
 * //     { // GraphSummary
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "CREATING" || "AVAILABLE" || "DELETING" || "RESETTING" || "UPDATING" || "SNAPSHOTTING" || "FAILED",
 * //       provisionedMemory: Number("int"),
 * //       publicConnectivity: true || false,
 * //       endpoint: "STRING_VALUE",
 * //       replicaCount: Number("int"),
 * //       kmsKeyIdentifier: "STRING_VALUE",
 * //       deletionProtection: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGraphsCommandInput - {@link ListGraphsCommandInput}
 * @returns {@link ListGraphsCommandOutput}
 * @see {@link ListGraphsCommandInput} for command's `input` shape.
 * @see {@link ListGraphsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 */
export class ListGraphsCommand extends $Command<
  ListGraphsCommandInput,
  ListGraphsCommandOutput,
  NeptuneGraphClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      ApiType: { type: "staticContextParams", value: `ControlPlane` },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListGraphsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGraphsCommandInput, ListGraphsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListGraphsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneGraphClient";
    const commandName = "ListGraphsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonNeptuneGraph",
        operation: "ListGraphs",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListGraphsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListGraphsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGraphsCommandOutput> {
    return de_ListGraphsCommand(output, context);
  }
}

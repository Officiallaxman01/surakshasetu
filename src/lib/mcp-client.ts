/**
 * MCP (Model Context Protocol) Client Configuration
 * For integrating with ReactBits MCP server
 */

export interface MCPConfig {
  serverUrl: string;
  enabled: boolean;
  timeout?: number;
}

export const mcpConfig: MCPConfig = {
  serverUrl: process.env.NEXT_PUBLIC_MCP_SERVER_URL || 'https://reactbits.dev/mcp',
  enabled: true,
  timeout: 5000,
};

export class MCPClient {
  private config: MCPConfig;

  constructor(config: MCPConfig) {
    this.config = config;
  }

  async fetchComponent(componentName: string) {
    if (!this.config.enabled) {
      throw new Error('MCP is not enabled');
    }

    try {
      const response = await fetch(`${this.config.serverUrl}/components/${componentName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(this.config.timeout || 5000),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch component: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`MCP Client Error: ${error}`);
      throw error;
    }
  }

  isEnabled(): boolean {
    return this.config.enabled;
  }
}

export const mcpClient = new MCPClient(mcpConfig);


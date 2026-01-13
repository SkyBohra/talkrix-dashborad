import React, { useState } from 'react';
import { createAgent, updateAgent } from '../../lib/agentApi';
import { Button } from '../ui/button';

interface AgentFormProps {
  userId: string;
  agent?: any;
  onSuccess: () => void;
}

export const AgentForm: React.FC<AgentFormProps> = ({ userId, agent, onSuccess }) => {
  const [name, setName] = useState(agent?.name || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (agent) {
      await updateAgent(agent._id, { name });
    } else {
      await createAgent(userId, { name });
    }
    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Agent Name"
        required
        className="border p-2 rounded"
      />
      <Button type="submit" disabled={loading}>
        {agent ? 'Update Agent' : 'Create Agent'}
      </Button>
    </form>
  );
};

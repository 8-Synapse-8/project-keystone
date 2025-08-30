import React, { useState } from "react";
import { crew } from "@/components/character-modal";
import CharacterModal from "@/components/character-modal";

export default function CharactersDemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Crew Profiles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crew.map((char) => (
          <div
            key={char.id}
            className="bg-card rounded-xl shadow p-4 flex flex-col items-center cursor-pointer hover:bg-muted"
            onClick={() => handleOpen(char.id)}
          >
            <img
              src={char.imageUrl}
              alt={char.name}
              className="w-24 h-24 rounded-full object-cover mb-2"
            />
            <h2 className="text-xl font-semibold">{char.name}</h2>
            <p className="text-sm text-muted-foreground">{char.title}</p>
          </div>
        ))}
      </div>
      {selectedId && (
        <CharacterModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          characterId={selectedId}
        />
      )}
    </div>
  );
}

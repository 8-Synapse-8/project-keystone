import React, { useState } from "react";
import { crew } from "@/components/character-modal";
import CharacterModal from "@/components/character-modal";
import Sidebar from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const CURRENT_USER_ID = "demo-user-1";

export default function CharactersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const characters = crew;
  const charactersLoading = false;

  if (charactersLoading) {
    return (
      <div className="min-h-screen hero-bg">
        <div className="flex">
          <Sidebar isOpen={true} progress={undefined} />
          <div className="flex-1 p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-80 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen hero-bg">
      <div className="flex">
        <Sidebar isOpen={true} progress={undefined} />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="font-orbitron text-3xl font-bold text-white mb-2">
                Character Profiles
              </h1>
              <p className="text-gray-400">
                Meet the crew and allies who shape your journey through the Keystone Project
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {characters.map((character) => (
                <Card key={character.id} className="glassmorphism border-gray-600/30 cursor-pointer" onClick={() => handleOpen(character.id)}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={character.imageUrl}
                        alt={character.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <CardTitle className="font-orbitron text-xl font-bold text-white">
                          {character.name}
                        </CardTitle>
                        <p className="text-purple-300">{character.title}</p>
                        <div className="flex items-center space-x-2 mt-1 text-sm text-gray-400">
                          <span>Trust Level: {character.trustLevel}%</span>
                          <span>Appeared in {character.appearanceCount} chapters</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {character.background}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {selectedId && (
            <CharacterModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              characterId={selectedId}
            />
          )}
        </main>
      </div>
    </div>
  );
}

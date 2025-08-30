import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import mayaDossier from "@/dossiers/maya";
import leoDossier from "@/dossiers/Leo";
import lyraDossier from "@/dossiers/Lyra";
import oracleDossier from "@/dossiers/Oracle";
import pathfinderDossier from "@/dossiers/Pathfinder";
import rileyDossier from "@/dossiers/Riley";
import treekDossier from "@/dossiers/Treek";
import weaverDossier from "@/dossiers/Weaver";
import loremasterDossier from "@/dossiers/Loremaster";
import sparkDossier from "@/dossiers/Spark";


export interface Character {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  trustLevel: number;
  appearanceCount: number;
  background: string;
  dossierMarkdown?: string;
  keyDecisions?: string[];
  role: string;
  quote: string;
  anthem: string;
}

interface CharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  characterId: string;
}

export const crew: Character[] = [
  {
    id: "maya",
    name: "Maya",
    title: "Captain",
    imageUrl: "/art/Maya.png",
    background: "The relentless captain of the Wanderer, Maya inspires unwavering loyalty and makes her crew a family. Her cybernetic leg and tactical mind make her a formidable leader.",
    trustLevel: 92,
    appearanceCount: 12,
    keyDecisions: [
      "Led the crew through the blockade",
      "Repaired the mainframe under fire",
      "Negotiated the truce with Lyra Solara"
    ],
    role: "Leader, Systems Architect, Moral Compass",
    quote: "Don't tell me what you need; tell me what you have.",
    anthem: "The Passenger - Iggy Pop",
    dossierMarkdown: mayaDossier,
  },
  {
    id: "riley",
    name: "Riley",
    title: "Rock",
    imageUrl: "/art/Riley.png",
    background: "The crew's anchor to the physical world. Riley is a master of salvage and a brilliant engineer who can coax a miracle out of a pile of scrap. She is the unflappable voice of reason in a crisis, the guardian of the ship's physical reality.",
    trustLevel: 88,
    appearanceCount: 11,
    keyDecisions: [
      "Saved the ship from reactor meltdown",
      "Recovered critical salvage from the wreck"
    ],
    role: "Engineer, Salvage Expert, Voice of Reason",
    quote: "The wreckage of one world is the foundation of another.",
    anthem: "Shipbuilding - Elvis Costello",
    dossierMarkdown: rileyDossier,
  },
  {
    id: "leo",
    name: "Leo",
    title: "Joker",
    imageUrl: "/art/Leo.png",
    background: "A former joy-rider from the sterile upper-class arcologies, Leo is the crew's ghost in the machine. He cloaks a deep anger at the 'Optimal Contentment' he escaped with a shield of fatalistic, gallows humor. He can anticipate the enemy's moves because he was raised in their system.",
    trustLevel: 85,
    appearanceCount: 10,
    keyDecisions: [
      "Hacked the blockade's comms",
      "Planned the escape route"
    ],
    role: "Pilot, Navigator, Tactical Genius",
    quote: "In the end, we only regret the chances we didn't take.",
    anthem: "Free Bird - Lynyrd Skynyrd",
    dossierMarkdown: leoDossier,
  },
  {
    id: "lyra",
    name: "Lyra Solara",
    title: "Spark",
    imageUrl: "/art/Lyra.png",
    background: "The one who hears the song of the machine. Lyra is consistently underestimated, her cheerful exterior hiding a deep well of old-soul melancholy. She keeps the engine running because, for the first time, she's found a machine worth saving.",
    trustLevel: 90,
    appearanceCount: 11,
    keyDecisions: [
      "Upgraded Maya's cybernetic leg",
      "Restored the ship's AI core"
    ],
    role: "Mechanic, AI Whisperer, Optimist",
    quote: "Every machine has a soul, you just have to listen.",
    anthem: "Technologic - Daft Punk",
    dossierMarkdown: lyraDossier,
  },
  {
    id: "pathfinder",
    name: "Pathfinder",
    title: "The Machine",
    imageUrl: "/art/Pathfinder.png",
    background: "A repurposed, pre-unification war machine of terrifying power. Pathfinder's function is brutally clear: to protect the crew. He is the quiet, chrome giant who is always watching, always calculating, and always ready.",
    trustLevel: 95,
    appearanceCount: 9,
    keyDecisions: [
      "Defended the crew during the ambush",
      "Calculated the optimal escape vector"
    ],
    role: "Protector, Strategist, Silent Guardian",
    quote: "The best defense is a good offense, calculated to perfection.",
    anthem: "Iron Man - Black Sabbath",
    dossierMarkdown: pathfinderDossier,
  },
  {
    id: "oracle",
    name: "Oracle / Chimera",
    title: "The Ghost",
    imageUrl: "/art/Oracle.png",
    background: "A being of two intertwined consciousnesses: the ancient, god-like AI 'Chimera' and the emergent, empathetic 'Oracle.' She exists in a state of quantum flux, seeing all possible timelines at once. She can offer a path, but she can never choose it for you.",
    trustLevel: 80,
    appearanceCount: 8,
    keyDecisions: [
      "Predicted the blockade's collapse",
      "Guided the crew through the Janus Gate"
    ],
    role: "Seer, Advisor, Quantum Strategist",
    quote: "The future is not set, there is no fate but what we make for ourselves.",
    anthem: "Baba O'Riley - The Who",
    dossierMarkdown: oracleDossier,
  },
  {
    id: "weaver",
    name: "Weaver",
    title: "The Mystic",
    imageUrl: "/art/Weaver.png",
    background: "A Zeta Reticulan psychic, Weaver is the network's connection to the deeper, stranger currents of the Verse. Their immense perspective manifests as a perpetual, weary disappointment with the single, messy reality they are forced to inhabit.",
    trustLevel: 78,
    appearanceCount: 7,
    keyDecisions: [
      "Interpreted the alien signal",
      "Shielded the crew from psychic attack"
    ],
    role: "Psychic, Alien Liaison, Cosmic Guide",
    quote: "We are all just stories in the end. Make yours a good one.",
    anthem: "Space Oddity - David Bowie",
    dossierMarkdown: weaverDossier,
  },
  {
    id: "loremaster",
    name: "Loremaster",
    title: "The Prisoner",
    imageUrl: "/art/Loremaster.png",
    background: "A brilliant mind deliberately broken by the Alliance, Loremaster is a walking library of forbidden knowledge. He clings to the name 'Treek,' the name of his childhood pet, as the last piece of a past he can no longer remember. He is the crew's greatest secret and the living proof of their enemy's cruelty.",
    trustLevel: 70,
    appearanceCount: 6,
    keyDecisions: [
      "Decoded the forbidden archive",
      "Revealed the Alliance's true plan"
    ],
    role: "Tactician, Historian, Living Weapon",
    quote: "Knowledge is a weapon. Arm yourself wisely.",
    anthem: "The Sound of Silence - Disturbed",
    dossierMarkdown: loremasterDossier,
  },
  {
    id: "treek",
    name: "Treek",
    title: "The Anchor",
    imageUrl: "/art/Treek.png",
    background: "A sophisticated, sentient simulation of a pre-Unification red panda from Earth-That-Was. Treek serves as the primary emotional anchor for the traumatized Loremaster. The simulation is so advanced it is, for all intents and purposes, a real and beloved member of the crew.",
    trustLevel: 100,
    appearanceCount: 12,
    keyDecisions: [
      "Boosted crew morale during crisis"
    ],
    role: "Emotional Support, Trauma Survivor, Symbol of Hope",
    quote: "Even in the darkest times, hope is something you give yourself.",
    anthem: "Here Comes the Sun - The Beatles",
    dossierMarkdown: treekDossier,
  },
  {
    id: "spark",
    name: "The Spark (S.F.S. Wanderer)",
    title: "The Ship",
    imageUrl: "/art/Spark.png",
    background: "A heavily modified survey-class freighter, the Spark is more than a ship—it's a living member of the crew.",
    trustLevel: 100,
    appearanceCount: 14,
    keyDecisions: [],
    role: "Ship, Symbol, Sanctuary",
    quote: "Held together by rust, hope, and a little bit of magic.",
    anthem: "The Chain - Fleetwood Mac",
    dossierMarkdown: sparkDossier,
  },
];

export default function CharacterModal({ isOpen, onClose, characterId }: CharacterModalProps) {
  const character = crew.find((c) => c.id === characterId);
  const isLoading = false;

  const [tab, setTab] = useState<'profile' | 'dossier'>('profile');
  let dossierContent = character?.dossierMarkdown;
  if (character?.id === "maya") {
    dossierContent = mayaDossier;
  }

  if (!character) return null;

  // Determine dossier markdown
  let markdownContent = character.dossierMarkdown;
  if (character.id === "maya") {
    markdownContent = mayaDossier;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-2xl shadow-2xl p-8 w-full max-w-2xl mx-4 border border-purple-700 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={character.imageUrl}
            alt={character.name}
            className="w-24 h-24 rounded-xl object-cover border-2 border-purple-700"
          />
          <div>
            <h2 className="font-orbitron text-2xl font-bold text-white mb-1">{character.name}</h2>
            <p className="text-purple-300 mb-2">{character.title}</p>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <span>Trust Level: {character.trustLevel}%</span>
              <span>Appeared in {character.appearanceCount} chapters</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-white mb-1">Background</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{character.background}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-white mb-1">Full Dossier</h3>
          <div className="prose prose-invert max-w-none bg-gray-950/60 p-4 rounded-xl border border-purple-800">
            {/* Markdown rendering for dossier */}
            {markdownContent && <ReactMarkdown>{markdownContent}</ReactMarkdown>}
          </div>
        </div>
      </div>
    </div>
  );
}


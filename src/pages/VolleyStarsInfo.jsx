import React from 'react'
import { playingRules } from '../data/volleyData'
import { BookOpen, Users, Trophy, Lightbulb, MapPin, Clock, Target, Star, Info } from 'lucide-react'

function VolleyStarsInfo() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-2">Volley Stars - Complete Gids</h1>
        <p className="text-blue-100">
          Alles wat je moet weten over de officiële Nevobo methodiek voor jeugdvolleybal
        </p>
      </div>

      {/* Speelregels */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <BookOpen className="text-blue-600" />
          {playingRules.general.title}
        </h2>
        <p className="text-gray-600 mb-6">{playingRules.general.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-green-700">Zo worden we allemaal beter:</h3>
            <ul className="space-y-2">
              {playingRules.general.principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Star size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 text-orange-800">
              {playingRules.general.volleyballLikeTechniques.title}
            </h4>
            {playingRules.general.volleyballLikeTechniques.techniques.map((technique, index) => (
              <div key={index} className="mb-3">
                <h5 className="font-medium text-orange-700">{technique.name}</h5>
                <p className="text-orange-600 text-sm">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodische toelichting */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Lightbulb className="text-yellow-600" />
          {playingRules.methodology.title}
        </h2>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Algemeen doel</h3>
            <p className="text-blue-700">{playingRules.methodology.generalGoal}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Kernuitdaging</h3>
            <p className="text-green-700">{playingRules.methodology.coreChallenge}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Ontwikkeling</h3>
            <p className="text-purple-700">{playingRules.methodology.development}</p>
          </div>
        </div>
      </div>

      {/* Toernooivormen */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Trophy className="text-gold-600" />
          {playingRules.tournamentFormat.title}
        </h2>
        <p className="text-gray-600 mb-6">{playingRules.tournamentFormat.description}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Voordelen van toernooivormen:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {playingRules.tournamentFormat.advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-2">
                <Trophy size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Level 1-3 (Jongste kinderen)</h4>
            <p className="text-blue-700 text-sm">{playingRules.tournamentFormat.teamStructure.levels123}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Level 4-5 (Oudere kinderen)</h4>
            <p className="text-green-700 text-sm">{playingRules.tournamentFormat.teamStructure.levels45}</p>
          </div>
        </div>
      </div>

      {/* Veldvariaties */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <MapPin className="text-green-600" />
          {playingRules.fieldVariations.title}
        </h2>
        <p className="text-gray-600 mb-6">{playingRules.fieldVariations.generalRule}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Toegestane veldbreedtes per level:</h3>
            <div className="space-y-2">
              {Object.entries(playingRules.fieldVariations.allowedWidths).map(([level, width]) => (
                <div key={level} className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded">
                  <span className="font-medium capitalize">{level.replace('level', 'Level ')}</span>
                  <span className="text-gray-600">{width}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Aanbevelingen Level 1-3</h4>
              <p className="text-yellow-700 text-sm">{playingRules.fieldVariations.recommendations.levels123}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Minimum breedte</h4>
              <p className="text-red-700 text-sm">{playingRules.fieldVariations.recommendations.minimumWidth}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wedstrijdbal */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Target className="text-orange-600" />
          {playingRules.ballSpecifications.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">
              Level 1-3: {playingRules.ballSpecifications.levels123.weight}
            </h3>
            <p className="text-blue-700 text-sm">{playingRules.ballSpecifications.levels123.advantages}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">
              Level 4-5: {playingRules.ballSpecifications.levels45.weight}
            </h3>
            <p className="text-green-700 text-sm">{playingRules.ballSpecifications.levels45.advantages}</p>
          </div>
        </div>
      </div>

      {/* Bounce-set uitleg */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Info className="text-purple-600" />
          {playingRules.bounceSetExplanation.title}
        </h2>
        
        <p className="text-gray-600 mb-4">{playingRules.bounceSetExplanation.description}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Voordelen van de bounce-set:</h3>
          <ul className="space-y-2">
            {playingRules.bounceSetExplanation.advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-2">
                <Target size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Uitvoering</h4>
            <p className="text-green-700 text-sm">{playingRules.bounceSetExplanation.execution}</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">Belangrijke regel</h4>
            <p className="text-orange-700 text-sm">{playingRules.bounceSetExplanation.rule}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolleyStarsInfo
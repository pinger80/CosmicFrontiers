ServerEvents.recipes(event => {
    event.recipes.gtceu.naquahine_reactor('naquahine_mk_one')
        .itemInputs('64x gtceu:industrial_tnt')
        .magnetStats(50000, 450, true)
        .inputFluids('gtceu:naquahine_superfuel_mk_one 6000')
        .duration(1200)
        .EUt(-GTValues.V[GTValues.UV])
    event.recipes.gtceu.naquahine_reactor('naquahine_mk_two')
        .itemInputs('64x gtceu:industrial_tnt')
        .magnetStats(1000000, 1500, true)
        .inputFluids('gtceu:naquahine_superfuel_mk_two 6000')
        .duration(1200)
        .EUt(-GTValues.V[GTValues.UHV])
    //Tiny Naq Reactors 
    event.recipes.gtceu.mini_naquahine_reactor('naquahine_mk_one_smol')
        .itemInputs('1x gtceu:industrial_tnt')
        .inputFluids('gtceu:naquahine_superfuel_mk_one 3000')
        .duration(300)
        .EUt(-GTValues.V[GTValues.IV])

    //Nqa Line
    event.recipes.gtceu.arc_furnace('fused_arc_emulsion')
        .itemInputs('gtceu:naquadah_dust')
        .inputFluids('gtceu:luminite 144')
        .itemOutputs('2x gtceu:fused_naquadah_emulsion_dust')
        .duration(240)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.mixer('raw_naquahine')
        .itemInputs('2x gtceu:fused_naquadah_emulsion_dust')
        .inputFluids('gtceu:astraline_corrosion_agent 3000')
        .outputFluids('gtceu:raw_naquahine 4000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.large_chemical_reactor('prisma_naquahine')
        .notConsumable('32x bloodmagic:reagentbinding')
        .inputFluids('gtceu:hydrofluoric_acid 2000')
        .inputFluids('gtceu:raw_naquahine 2000')
        .inputFluids('cosmiccore:prisma 2000')
        .outputFluids('gtceu:prisma_doped_raw_naquahine 6000')
        .duration(360)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.distillation_tower('inert_naquahine')
        .disableDistilleryRecipes(true)
        .inputFluids('gtceu:prisma_doped_raw_naquahine 12000')
        .itemOutputs('gtceu:inert_naquahine_dust')
        .outputFluids('gtceu:hydrofluoric_acid 4000')
        .outputFluids('cosmiccore:prisma 4000')
        .outputFluids('gtceu:astraline_corrosion_agent 3000')
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.brewery('raw_naquahine_to_source_cut')
        .itemInputs('4x gtceu:inert_naquahine_dust')
        .inputFluids('gtceu:source_oils 8000')
        .outputFluids('gtceu:source_cut_naquahine_solution 8000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.fermenter('source_cut_to_naquahine_rich_mixture')
        .inputFluids('gtceu:source_cut_naquahine_solution 8000')
        .outputFluids('gtceu:naquahine_rich_mixture 4000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.large_chemical_reactor('rich_mixture_to_naquahine_gas')
        .inputFluids('gtceu:naquahine_rich_mixture 4000')
        .inputFluids('gtceu:tritium 4000')
        .inputFluids('gtceu:deuterium 4000')
        .outputFluids('gtceu:source_oils 8000')
        .outputFluids('gtceu:naquahine 8000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.mixer('thundering_naquahine_mix')
        .inputFluids('gtceu:naquahine 4000')
        .inputFluids('gtceu:thundering_mana 2000')
        .outputFluids('gtceu:thunder_charged_naquahine_mixture 6000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.cracker('critically_steam_cracked_thundering_naquahine')
        .inputFluids('gtceu:thunder_charged_naquahine_mixture 1000')
        .inputFluids('gtceu:super_critical_steam 1000')
        .outputFluids('gtceu:critically_steam_cracked_thundering_naquahine 1000')
        .circuit(1)
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.cracker('critically_steam_cracked_thundering_naquahine_costly')
        .inputFluids('gtceu:thunder_charged_naquahine_mixture 1000')
        .inputFluids('gtceu:steam 25000')
        .circuit(2)
        .outputFluids('gtceu:critically_steam_cracked_thundering_naquahine 1000')
        .duration(60)
        .EUt(GTValues.VA[GTValues.ZPM])
    event.recipes.gtceu.vacuum_freezer('energized_naquahine_fuel_preperation')
        .inputFluids('gtceu:critically_steam_cracked_thundering_naquahine 12000')
        .inputFluids('gtceu:tears_of_the_sky 8000')
        .outputFluids('gtceu:energized_naquahine_fuel_preperation 20000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.essence_reactor('aerated_naquahine')
        .inputFluids('gtceu:energized_naquahine_fuel_preperation 4000')
        .inputFluids('gtceu:ammonia_rich_aerocloud_solution 2000')
        .inputFluids('gtceu:nitrobenzene 4000')
        .outputFluids('gtceu:aerated_naquahine 10000')
        .duration(160)
        .EUt(GTValues.VA[GTValues.LuV])
    event.recipes.gtceu.autoclave('naquahine_superfuel_mk_one')
        .inputFluids('gtceu:aerated_naquahine 1000')
        .outputFluids('gtceu:naquahine_superfuel_mk_one 1000')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])

})
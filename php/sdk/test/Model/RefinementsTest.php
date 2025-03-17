<?php
/**
 * RefinementsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\catalogItems\v2022_04_01\Refinements;

/**
 * RefinementsTest Class Doc Comment
 *
 * @category    Class
 * @description Optional fields that you can use to refine your search results.
 * @package     SpApi
 */
class RefinementsTest extends TestCase
{

    private Refinements $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Refinements();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Refinements"
     */
    public function testRefinements()
    {
        $this->assertInstanceOf(Refinements::class, $this->model);
    }

    /**
     * Test attribute "brands"
     */
    public function testPropertyBrands()
    {
        $testValue = [];
        
        $this->model->setBrands($testValue);
        $this->assertEquals($testValue, $this->model->getBrands());
    }

    /**
     * Test attribute "classifications"
     */
    public function testPropertyClassifications()
    {
        $testValue = [];
        
        $this->model->setClassifications($testValue);
        $this->assertEquals($testValue, $this->model->getClassifications());
    }
}

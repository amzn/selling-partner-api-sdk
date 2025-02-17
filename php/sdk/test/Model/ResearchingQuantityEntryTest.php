<?php
/**
 * ResearchingQuantityEntryTest
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
use SpApi\Model\fba\inventory\v1\ResearchingQuantityEntry;

/**
 * ResearchingQuantityEntryTest Class Doc Comment
 *
 * @category    Class
 * @description The misplaced or warehouse damaged inventory that is actively being confirmed at our fulfillment centers.
 * @package     SpApi
 */
class ResearchingQuantityEntryTest extends TestCase
{

    private ResearchingQuantityEntry $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ResearchingQuantityEntry();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ResearchingQuantityEntry"
     */
    public function testResearchingQuantityEntry()
    {
        $this->assertInstanceOf(ResearchingQuantityEntry::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $enumInstance = new ResearchingQuantityEntry();
        $allowedValues = $enumInstance->getNameAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }
}

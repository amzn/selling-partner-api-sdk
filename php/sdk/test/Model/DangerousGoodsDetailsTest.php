<?php
/**
 * DangerousGoodsDetailsTest
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
use SpApi\Model\merchantFulfillment\v0\DangerousGoodsDetails;

/**
 * DangerousGoodsDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details related to any dangerous goods or items that are shipped.
 * @package     SpApi
 */
class DangerousGoodsDetailsTest extends TestCase
{

    private DangerousGoodsDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DangerousGoodsDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DangerousGoodsDetails"
     */
    public function testDangerousGoodsDetails()
    {
        $this->assertInstanceOf(DangerousGoodsDetails::class, $this->model);
    }

    /**
     * Test attribute "united_nations_regulatory_id"
     */
    public function testPropertyUnitedNationsRegulatoryId()
    {
        $testValue = 'test';
        
        $this->model->setUnitedNationsRegulatoryId($testValue);
        $this->assertEquals($testValue, $this->model->getUnitedNationsRegulatoryId());
    }

    /**
     * Test attribute "transportation_regulatory_class"
     */
    public function testPropertyTransportationRegulatoryClass()
    {
        $testValue = 'test';
        
        $this->model->setTransportationRegulatoryClass($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationRegulatoryClass());
    }

    /**
     * Test attribute "packing_group"
     */
    public function testPropertyPackingGroup()
    {
        $enumInstance = new DangerousGoodsDetails();
        $allowedValues = $enumInstance->getPackingGroupAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setPackingGroup($testValue);
        $this->assertEquals($testValue, $this->model->getPackingGroup());
    }

    /**
     * Test attribute "packing_instruction"
     */
    public function testPropertyPackingInstruction()
    {
        $enumInstance = new DangerousGoodsDetails();
        $allowedValues = $enumInstance->getPackingInstructionAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setPackingInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getPackingInstruction());
    }
}

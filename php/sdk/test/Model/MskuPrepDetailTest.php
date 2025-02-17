<?php
/**
 * MskuPrepDetailTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\MskuPrepDetail;

/**
 * MskuPrepDetailTest Class Doc Comment
 *
 * @category    Class
 * @description An MSKU and its related prep details.
 * @package     SpApi
 */
class MskuPrepDetailTest extends TestCase
{

    private MskuPrepDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MskuPrepDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MskuPrepDetail"
     */
    public function testMskuPrepDetail()
    {
        $this->assertInstanceOf(MskuPrepDetail::class, $this->model);
    }

    /**
     * Test attribute "all_owners_constraint"
     */
    public function testPropertyAllOwnersConstraint()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\AllOwnersConstraint();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAllOwnersConstraint($testValue);
        $this->assertEquals($testValue, $this->model->getAllOwnersConstraint());
    }

    /**
     * Test attribute "label_owner_constraint"
     */
    public function testPropertyLabelOwnerConstraint()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\OwnerConstraint();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelOwnerConstraint($testValue);
        $this->assertEquals($testValue, $this->model->getLabelOwnerConstraint());
    }

    /**
     * Test attribute "msku"
     */
    public function testPropertyMsku()
    {
        $testValue = 'test';
        
        $this->model->setMsku($testValue);
        $this->assertEquals($testValue, $this->model->getMsku());
    }

    /**
     * Test attribute "prep_category"
     */
    public function testPropertyPrepCategory()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\PrepCategory();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepCategory($testValue);
        $this->assertEquals($testValue, $this->model->getPrepCategory());
    }

    /**
     * Test attribute "prep_owner_constraint"
     */
    public function testPropertyPrepOwnerConstraint()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\OwnerConstraint();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepOwnerConstraint($testValue);
        $this->assertEquals($testValue, $this->model->getPrepOwnerConstraint());
    }

    /**
     * Test attribute "prep_types"
     */
    public function testPropertyPrepTypes()
    {
        $testValue = [];
        
        $this->model->setPrepTypes($testValue);
        $this->assertEquals($testValue, $this->model->getPrepTypes());
    }
}

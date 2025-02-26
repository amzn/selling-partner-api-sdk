<?php
/**
 * PrepDetailsTest
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
use SpApi\Model\awd\v2024_05_09\PrepDetails;

/**
 * PrepDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The preparation details for a product. This contains the prep category, prep owner, and label owner. Prep instructions are generated based on the specified category.
 * @package     SpApi
 */
class PrepDetailsTest extends TestCase
{

    private PrepDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepDetails"
     */
    public function testPrepDetails()
    {
        $this->assertInstanceOf(PrepDetails::class, $this->model);
    }

    /**
     * Test attribute "label_owner"
     */
    public function testPropertyLabelOwner()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\LabelOwner();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelOwner($testValue);
        $this->assertEquals($testValue, $this->model->getLabelOwner());
    }

    /**
     * Test attribute "prep_category"
     */
    public function testPropertyPrepCategory()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\PrepCategory();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepCategory($testValue);
        $this->assertEquals($testValue, $this->model->getPrepCategory());
    }

    /**
     * Test attribute "prep_instructions"
     */
    public function testPropertyPrepInstructions()
    {
        $testValue = [];
        
        $this->model->setPrepInstructions($testValue);
        $this->assertEquals($testValue, $this->model->getPrepInstructions());
    }

    /**
     * Test attribute "prep_owner"
     */
    public function testPropertyPrepOwner()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\PrepOwner();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepOwner($testValue);
        $this->assertEquals($testValue, $this->model->getPrepOwner());
    }
}

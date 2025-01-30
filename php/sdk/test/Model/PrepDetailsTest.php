<?php
/**
 * PrepDetailsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\awd\PrepDetails;

/**
 * PrepDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The preparation details for a product. This contains the prep category, prep owner, and label owner. Prep instructions are generated based on the specified category.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\awd\LabelOwner();
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
        $testValue = 'test';
        
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
        $enumInstance = new \OpenAPI\Client\Model\awd\PrepOwner();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setPrepOwner($testValue);
        $this->assertEquals($testValue, $this->model->getPrepOwner());
    }
}

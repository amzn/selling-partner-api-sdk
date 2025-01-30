<?php
/**
 * PrepInstructionTest
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
use OpenAPI\Client\Model\awd\PrepInstruction;

/**
 * PrepInstructionTest Class Doc Comment
 *
 * @category    Class
 * @description Information pertaining to the preparation of inbound products.
 * @package     OpenAPI\Client
 */
class PrepInstructionTest extends TestCase
{

    private PrepInstruction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepInstruction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepInstruction"
     */
    public function testPrepInstruction()
    {
        $this->assertInstanceOf(PrepInstruction::class, $this->model);
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

    /**
     * Test attribute "prep_type"
     */
    public function testPropertyPrepType()
    {
        $testValue = 'test';
        
        $this->model->setPrepType($testValue);
        $this->assertEquals($testValue, $this->model->getPrepType());
    }
}

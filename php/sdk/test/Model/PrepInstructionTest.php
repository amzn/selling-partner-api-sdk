<?php
/**
 * PrepInstructionTest
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
use SpApi\Model\awd\v2024_05_09\PrepInstruction;

/**
 * PrepInstructionTest Class Doc Comment
 *
 * @category    Class
 * @description Information pertaining to the preparation of inbound products.
 * @package     SpApi
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
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\PrepOwner();
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

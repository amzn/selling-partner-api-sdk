<?php
/**
 * ConstraintTest
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
use SpApi\Model\merchantFulfillment\v0\Constraint;

/**
 * ConstraintTest Class Doc Comment
 *
 * @category    Class
 * @description A validation constraint.
 * @package     SpApi
 */
class ConstraintTest extends TestCase
{

    private Constraint $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Constraint();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Constraint"
     */
    public function testConstraint()
    {
        $this->assertInstanceOf(Constraint::class, $this->model);
    }

    /**
     * Test attribute "validation_reg_ex"
     */
    public function testPropertyValidationRegEx()
    {
        $testValue = 'test';
        
        $this->model->setValidationRegEx($testValue);
        $this->assertEquals($testValue, $this->model->getValidationRegEx());
    }

    /**
     * Test attribute "validation_string"
     */
    public function testPropertyValidationString()
    {
        $testValue = 'test';
        
        $this->model->setValidationString($testValue);
        $this->assertEquals($testValue, $this->model->getValidationString());
    }
}

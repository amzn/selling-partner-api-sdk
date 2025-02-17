<?php
/**
 * ConstraintTypeTest
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
use SpApi\Model\orders\v0\ConstraintType;

/**
 * ConstraintTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Details the importance of the constraint present on the item
 * @package     SpApi
 */
class ConstraintTypeTest extends TestCase
{

    private ConstraintType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ConstraintType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ConstraintType"
     */
    public function testConstraintType()
    {
        $this->assertInstanceOf(ConstraintType::class, $this->model);
    }
}

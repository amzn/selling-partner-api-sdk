<?php
/**
 * AssignmentTypeTest
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
use OpenAPI\Client\Model\transfers\v2024_06_01\AssignmentType;

/**
 * AssignmentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The default payment method type.
 * @package     OpenAPI\Client
 */
class AssignmentTypeTest extends TestCase
{

    private AssignmentType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AssignmentType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AssignmentType"
     */
    public function testAssignmentType()
    {
        $this->assertInstanceOf(AssignmentType::class, $this->model);
    }
}

<?php
/**
 * AllOwnersConstraintTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\AllOwnersConstraint;

/**
 * AllOwnersConstraintTest Class Doc Comment
 *
 * @category    Class
 * @description A constraint that applies to all owners. If no constraint is specified, defer to any individual owner constraints.
 * @package     SpApi
 */
class AllOwnersConstraintTest extends TestCase
{

    private AllOwnersConstraint $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AllOwnersConstraint();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AllOwnersConstraint"
     */
    public function testAllOwnersConstraint()
    {
        $this->assertInstanceOf(AllOwnersConstraint::class, $this->model);
    }
}
